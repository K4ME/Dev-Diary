import PropTypes from "prop-types";
import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";

function Internationalization({ children }) {
  return <ConfigProvider locale={ptBR}>{children}</ConfigProvider>;
}

Internationalization.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Internationalization;
