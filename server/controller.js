function getHouses(req,res){
    const db = req.app.get('db');
    db.getHouses().then(response => {
        res.status(200).json(response);
        // console.log(response);
    })
}

function addHouse(req,res){
    const db = req.app.get('db');
    const {name,address,city,state,zip}=req.body;
    db.addHouse(name,address,city,state,zip).then((response)=>{
        res.status(200).json(response)
    }  )        
}
function deleteHouse(req,res){
    const db = req.app.get('db');
    const id = +req.params.id;
    db.deleteHouse(id).then((response) => {
        res.status(200).json(response)
    })
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}