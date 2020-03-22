export default class ClassService{
    static myInstance = null;

    static getInstance() {
        if (ClassService.myInstance == null) {
            ClassService.myInstance = new ClassService()
        }
        return this.myInstance;
    }

    getBuildingsList() {
        return fetch("http://localhost:3001/buildings")
            .then(response => response.json())
    }

    getRoomsList(buildingID) {
        return fetch("http://localhost:3001/rooms:" + buildingID)
            .then(response => response.json())
    }
}