import {v4 as uuidv4} from 'uuid';

type ObjectStream = string | 'gif' | 'Doc' | 'File' | 'Video' | 'Zip';

export interface Message {
    message: ObjectStream;
    tag: boolean;
    tagId?: string;
}

export interface MessagePallet {
    messageId: string;
    timestamp: number;
    message: Message;
    seen: boolean;
    Delivered: boolean;
    sent: boolean;
}

export type Streamer = 'Receiver' | 'Sender';

export type ConversationPallets = {[key in Streamer]: MessagePallet}[];

export type Filter = 'Archive' | 'Business' | 'Favorite' | 'Primary' | 'General' | 'Verified' | 'Request' | 'Online' | 'Unread';

export interface Friends {
    id?: string;
    relation: Filter;
    name: string;
    image: string;
    online: boolean;
    verified: boolean;
    friends: boolean;
    Gender: 'Male' | 'Female';
}

export interface Messages {
    userId: string;
    category: Filter;
    messages: ConversationPallets;
}

const generateRandomUserId = (): string => uuidv4();

// Constant array of 20 userIds for testing
const testUserIds: string[] = Array.from({length: 20}, generateRandomUserId);

const getRandomUserId = (): string => {
    const randomIndex = Math.floor(Math.random() * testUserIds.length);
    return testUserIds[randomIndex];
};

const generateRandomFriends = (): Friends => {
    const generateRandomFriend = (): Friends => ({
        id: getRandomUserId(),
        relation: getRandomRelation(),
        name: `Friend ${Math.floor(Math.random() * 100) + 1}`,
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        online: Math.random() < 0.5,
        verified: Math.random() < 0.5,
        friends: Math.random() < 0.5,
        Gender: Math.random() < 0.5 ? 'Male' : 'Female',
    });

    const getRandomRelation = (): Filter => {
        const relations: Filter[] = ['Archive', 'Business', 'Favorite', 'Primary', 'General', 'Verified', 'Request', 'Online', 'Unread'];
        const randomIndex = Math.floor(Math.random() * relations.length);
        return relations[randomIndex];
    };

    return generateRandomFriend();
};

const generateRandomMessages = (): Messages => {
    const userId = getRandomUserId();
    const category: Filter = 'Business'; // Set a default category or use getRandomCategory()
    const messages: ConversationPallets = Array.from({length: 20}, (_, index) => ({
        Receiver: {
            messageId: uuidv4(),
            timestamp: Date.now(),
            message: {
                message: `Sample message ${index + 1}`,
                tag: index % 3 === 0, // Randomly set tag to true for some messages
                tagId: index % 3 === 0 ? getRandomUserId() : undefined, // Assign tagId to random userId if tag is true
            },
            seen: index % 3 === 0,
            Delivered: Math.random() < 0.5,
            sent: true,
        },
        Sender: {
            messageId: uuidv4(),
            timestamp: Date.now(),
            message: {
                message: `Sample message ${index + 1}`,
                tag: index % 3 === 0, // Randomly set tag to true for some messages
                tagId: index % 3 === 0 ? getRandomUserId() : undefined, // Assign tagId to random userId if tag is true
            },
            seen: index % 3 === 0,
            Delivered: Math.random() < 0.5,
            sent: true,
        },
    }));

    const friends: Friends[] = Array.from({length: 20}, generateRandomFriends);

    return {userId, category, messages};
};

const generateRandomMessagesSampleData = (): Messages[] => {
    return Array.from({length: 20}, generateRandomMessages);
};
const generateRandomFriendsSampleData = (): Friends[] => {
    return Array.from({length: 20}, generateRandomFriends);
};
export {
    generateRandomMessagesSampleData,
    generateRandomFriendsSampleData
}
