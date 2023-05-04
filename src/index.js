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
      Promise.all([
        DataBusiness.getCharacterById(user.id),
        DataBusiness.getEpisode(),
      ]).then(([dataBis, data]) => {
        Utils.showCharacter(dataBis);
        for (let episode of data.results) {
          Utils.showEpisode(episode);
        }
      });
    };
    nodes.push(node);
  }
  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
