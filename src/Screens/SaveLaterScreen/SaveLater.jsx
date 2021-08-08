import React from "react";
import { useSaveLaterContext } from "../../Context/SaveLaterContext/SaveLaterContext";
import Button from "@material-ui/core/Button";
import saveSVG from "../../SVG/save.svg";
function SaveLater() {
  const {
    state: { saveLater },
    saveDispatch,
  } = useSaveLaterContext();

  return (
    <div>
      <div className="heading">
        {" "}
        <h3>Saved Later</h3>{" "}
      </div>
      {saveLater.length === 0 && (
        <div className="svg">
          <img src={saveSVG} alt="" />
        </div>
      )}
      <div className="product-container cart-container">
        {saveLater.map((ele) => (
          <div className="individualProduct">
            <div className="product-container">
              <img src={ele.images[0].img} alt="" />
              <div className="product-desc">
                <h5>{ele.name}</h5>
                <p>₹{ele.price}</p>
              </div>
              <div className="product-container-CTA">
                <div style={{ display: "flex" }}>
                  <h5>Brand</h5> : <p>{ele.tag}</p>
                </div>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  saveDispatch({ type: "SAVE_LATER", payload: ele })
                }
              >
                Remove from Save Later
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaveLater;
