import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then((data) => {
  document.getElementById("root").innerText = "";
  const users = data.results;

  const nodes = [];
  for (let user of users) {
    const node = Utils.createCharacterRow(user);
    node.onclick = function () {
      DataBusiness.getCharacterById(user.id).then((dataBis) => {
        Utils.showCharacter(dataBis);
      });
    };

    nodes.push(node);
  }

  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
