export type RootStackParamList ={
    Root: undefined;
    NotFound:undefined
}
export type MainTabParamList={
    Camera: undefined;
    Chat: undefined;
    Status: undefined;
    Calls: undefined;
}
export type TabOneParamList={
    TabOneScreen: undefined
}
export type TabTwoParamList={
    TabTwoScreen: undefined
}
export type ChatRoom={
    id: string;
    User: User[];
    lastMessage: Message;
}
export type User={
    id: string;
    name: string;
    imageUri: string;
}
export type Message={
    id: string;
    content: string;
    createdAt: string;
    user:User;
}