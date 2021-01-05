import { makeAutoObservable } from "mobx";

export interface User {
    nickname: string;
}

export class RoomState {
    public users: User[] = [];
    public roomId: string = '';

    constructor() {
        makeAutoObservable(this)
    }

    setUsers(users: User[]) {
        this.users = users;
    } //TODO: ts_set

    addMe(me: User) {
        let hasMe = this.users.some(user=>user.nickname === me.nickname)
        console.log('hasMe', hasMe);
        
        if(!hasMe){
            this.users.unshift(me)
        }
    }

    setRoomId(roomId: string) {
        this.roomId = roomId;
    }
}

export const roomState = new RoomState();