export default class ClassService{
    static myInstance = null;

    static getInstance() {
        if (ClassService.myInstance == null) {
            ClassService.myInstance = new ClassService()
        }
        return this.myInstance;
    }

    getBuildingsList() {
      return
    }

    getRoomsList(buildingID) {
return
    }
}
