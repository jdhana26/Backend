import withShowHide from "../hoc/withShowHide";

const Image = () => (
  <img
    src="https://clipart-library.com/new_gallery/109-1098817_hot-wheels-png-transparent-image-hot-wheels-png.png"
    alt="sample"
    className="rounded shadow"
  />
);

export default withShowHide(Image);