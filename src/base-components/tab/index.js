import {
  createElement,
  createRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import dom from "@left4code/tw-starter/dist/js/dom";
import "@left4code/tw-starter/dist/js/tab";
import PropTypes from "prop-types";

const init = (el, props) => {
  const tabPanels = dom(el).find(".tab-content").first();
  const tabPanes = dom(tabPanels).children(".tab-pane");
  const tabList = [];
  const ids = [];

  dom(el)
    .find(".nav")
    .each(function () {
      if (dom(this).closest(".tab-content")[0] !== tabPanels[0]) {
        tabList.push(this);
      }
    });

  tabList.forEach((node) => {
    dom(node)
      .find(".nav-item")
      .each(function (key, el) {
        let id = "_" + Math.random().toString(36).substr(2, 9);
        if (ids[key] !== undefined) {
          id = ids[key];
        } else {
          ids[key] = id;
        }

        dom(this)
          .find(".nav-link")
          .attr({
            "data-tw-target": `#${id}`,
            "aria-controls": id,
            "aria-selected": false,
          });

        if (tabPanes[key] !== undefined) {
          dom(tabPanes[key]).attr({
            id: id,
            "aria-labelledby": `${id}-tab`,
          });
        }

        if (key === props.selectedIndex) {
          const tab = tailwind.Tab.getOrCreateInstance(
            dom(el).find(".nav-link")[0]
          );
          tab.show();
          dom(tabPanes).removeAttr("style");
        }

        const navLink = dom(el).find(".nav-link")[0];
        if (navLink["__initiated"] === undefined) {
          navLink["__initiated"] = true;

          navLink.addEventListener("show.tw.tab", () => {
            props.onChange(key);
          });
        }
      });
  });
};

// Tab wrapper
const tabGroupPropsContext = createContext();
function TabGroup({
  selectedIndex = 0,
  tag = "div",
  onChange = () => {},
  className,
  children,
}) {
  const tabRef = createRef();

  useEffect(() => {
    init(tabRef.current, { selectedIndex, onChange });
  }, [selectedIndex]);

  return createElement(
    tabGroupPropsContext.Provider,
    {
      value: { selectedIndex, tag, onChange },
    },
    createElement(
      tag,
      {
        className,
        ref: tabRef,
      },
      children
    )
  );
}

TabGroup.propTypes = {
  selectedIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  tag: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

function TabList({ className, children }) {
  const tabListRef = createRef();
  const tabGroupProps = useContext(tabGroupPropsContext);

  useEffect(() => {
    init(dom(tabListRef.current).parent(), tabGroupProps);
  }, [tabGroupProps]);

  return createElement(
    "ul",
    {
      className: `nav ${className}`,
      role: "tablist",
      ref: tabListRef,
    },
    children
  );
}

function Tab({
  fullWidth = true,
  tag = "a",
  className = "",
  children,
}) {
  return createElement(
    "li",
    {
      className: `nav-item ${fullWidth ? "flex-1" : ""}`,
      role: "presentation",
    },
    createElement(
      tag,
      {
        className: `nav-link ${className}`,
        type: "button",
        role: "tab",
      },
      children
    )
  );
}

Tab.propTypes = {
  fullWidth: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

function TabPanels({ className = "", children }) {
  return createElement(
    "div",
    {
      className: `tab-content w-full ${className}`,
    },
    children
  );
}

function TabPanel({ className = "", children }) {
  return createElement(
    "div",
    {
      className: `tab-pane ${className}`,
      role: "tabpanel",
    },
    children
  );
}

export { TabGroup, TabList, Tab, TabPanels, TabPanel };
