import { Modal } from "antd";

function ModalPopUp({
  open,
  title = "Add",
  okay = false,
  cancle = false,
  width = "800px",
  children,
  closable
}) {
  return (
    <Modal
      width={width}
      title={title}
      centered
      open={open}
      onOk={okay}
      onCancel={cancle}
      closable={closable}
    >
      {children}
    </Modal>
  );
}

export default ModalPopUp;
