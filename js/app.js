class App {
  addProperty() {
    let type = document.querySelector("select").value;
    let area = document.querySelector("input[name='area']").value;
    let isLocated = document.querySelector(
      "input[name='isLocated']:checked"
    ).value;
    let newProperty = new Properties(type, area, isLocated);
    this.addOnPropertiesList(newProperty);
  }

  addOnPropertiesList(newProperty) {
    let listElement = document.createElement("li");
    listElement.style.display = "flex";
    listElement.style.gap = "10px";
    let elementInfo = `Tipo: ${newProperty.type} (Área: ${newProperty.area} m²)`;
    if (newProperty.isLocated == "Sim") {
      let locatedMark = this.createLocatedMark();
      listElement.appendChild(locatedMark);
    }
    listElement.innerHTML += elementInfo;
    let removeBtn = this.createRemoveBtn();
    listElement.appendChild(removeBtn);
    document.getElementById("registeredProperties").appendChild(listElement);
  }

  createLocatedMark() {
    let locatedMark = document.createElement("span");
    locatedMark.style.backgroundColor = "firebrick";
    locatedMark.style.color = "gainsboro";
    locatedMark.style.padding = "2px 4px";
    locatedMark.style.borderRadius = "5px";
    locatedMark.style.border = "1px solid gainsboro";
    locatedMark.innerText = "Alugado";
    return locatedMark;
  }

  createRemoveBtn() {
    let removeBtn = document.createElement("input");
    removeBtn.style.width = "20px";
    removeBtn.style.height = "20px";
    removeBtn.style.alignSelf = "center";
    removeBtn.style.borderRadius = "50%";
    removeBtn.style.border = "1px solid gainsboro";
    removeBtn.style.backgroundColor = "firebrick";
    removeBtn.style.color = "gainsboro";
    removeBtn.style.fontSize = "15px";
    removeBtn.style.fontWeight = "600";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.textAlign = "center";
    removeBtn.setAttribute("onclick", "app.removeProperty()");
    removeBtn.type = "button";
    removeBtn.value = "-";
    return removeBtn;
  }

  removeProperty() {
    let removeElement = event.target.parentNode;
    document.getElementById("registeredProperties").removeChild(removeElement);
  }
}
