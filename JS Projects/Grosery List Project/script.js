/*
var itemList = [
    { itemName: "cooking Oil", amount: 120 },
    { itemName: "Rice ", amount: 150 },
    { itemName: "Sugar(kg)", amount: 100 },
    { itemName: "Poha", amount: 60 },
    { itemName: "Salt", amount: 40 },
    { itemName: "Green Vegetables  Bag", amount: 200 }
]

for (let index = 0; index < itemList.length; index++) {
    //debugger;
    const dropDownItemList = document.createElement("option")
    dropDownItemList.innerText = itemList[index].itemName + " " + " " + "-" + "  " + `(${itemList[index].amount})`;
    dropDownItemList.value = itemList[index].itemName;
    document.getElementById("gOptionList").append(dropDownItemList);
}
var selectedItems = [];

function AddData() {
    var selecetdItem = document.getElementById("gOptionList").value
    var quantityValue = document.getElementById("qtyId").value
    //debugger;

    const itemRecord = itemList.find(m => m.itemName == selecetdItem);

    //create object to push in selected Array
    const newobj = {
        itemName: selecetdItem,
        //itemName: itemRecord.itemName,    //same Value ItemName
        price: itemRecord.amount,
        quantity: quantityValue,
        tamount: itemRecord.amount * quantityValue
    }
    selectedItems.push(newobj)
    printData()
}

function printData() {
    let total = 0 ;

    document.getElementById("seletcItemRecord").innerText = ""
    for (let index = 0; index < selectedItems.length; index++) {
        const myTr = document.createElement("tr")

        const itemNameTd = document.createElement("td")
        itemNameTd.innerText = selectedItems[index].itemName +' - ' + selectedItems[index].price
        myTr.append(itemNameTd);

        const quantitytd =  document.createElement('td');
        quantitytd.innerText = selectedItems[index].quantity;
        myTr.append(quantitytd);

        const tAmountTd = document.createElement('td');
        tAmountTd.innerText = selectedItems[index].tamount;
        myTr.append(tAmountTd);

        document.getElementById("seletcItemRecord").append(myTr);

        debugger;
         total = total + selectedItems[index].tamount;
    }

    document.getElementById("tot").innerText = total 

}
*/

var itemList = [
    { itemName: "cooking Oil", amount: 120 },
    { itemName: "Rice ", amount: 150 },
    { itemName: "Sugar(kg)", amount: 100 },
    { itemName: "Poha", amount: 60 },
    { itemName: "Salt", amount: 40 },
    { itemName: "Green Vegetables Bag", amount: 200 }
]

for (let index = 0; index < itemList.length; index++) {
    var dropDownItemSList = document.createElement("option");
    dropDownItemSList.innerText = itemList[index].itemName + `- ${itemList[index].amount}`;
    dropDownItemSList.value = itemList[index].itemName
    document.getElementById("gOptionList").append(dropDownItemSList);
}

var selectedItems = [];

function addList() {
    var selecteditemList = document.getElementById("gOptionList").value
    var qty = document.getElementById("qtyId").value
    debugger;
    const selectedItem = itemList.find(m => m.itemName === selecteditemList);

    newobj = {
        item: selecteditemList,
        price: selectedItem.amount,
        quantity: qty,
        tprice: selectedItem.amount * qty
    }
    selectedItems.push(newobj);
    printData()
}

function printData() {
    let total = 0;

    document.getElementById("seletcItemRecord").innerText = "";
    for (let index = 0; index < selectedItems.length; index++) {
        const myTr = document.createElement("tr")

        const itemNameTd = document.createElement("td")
        itemNameTd.innerText = selectedItems[index].item + ' - ' + selectedItems[index].price;
        myTr.append(itemNameTd);

        const quantitytd = document.createElement('td');
        quantitytd.innerText = selectedItems[index].quantity;
        myTr.append(quantitytd);

        const tAmountTd = document.createElement('td');
        tAmountTd.innerText = selectedItems[index].tprice;
        myTr.append(tAmountTd);

        document.getElementById("seletcItemRecord").append(myTr);

        debugger;
        total = total + selectedItems[index].tprice;
    }
    document.getElementById("tot").innerText = total;
}

