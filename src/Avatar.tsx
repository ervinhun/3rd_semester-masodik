function Avatar({person, height = 100, width = 70}: Readonly<AvatarProps>) {
    return (
        <img
            className="avatar"
            //src="https://i.imgur.com/1bX5QH6.jpg"
            src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjhhMDczMWFhNWU0ODE5MThjYjE3ZWFlMjg4MTM0MTU6ZmlsZV8wMDAwMDAwMDYwNTA2MWZkYmQ0YzdjODc0ZGQ0YWNlMCIsInRzIjoiNDg3NTk2IiwicCI6InB5aSIsInNpZyI6IjJhMTQ5MTQ1NGI2ZDMyYWQ0MTI0NTRkN2U3MTA4MTFhNmZjNzJkM2MyOWYwYzljMjExOTU3MjcxMTdjZmZhNjkiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
            alt={person?.name + ' ' + person?.age}
            width={width}
            height={height}/>
    );
}

interface AvatarProps {
    person?: { name: string; age: number; imageId: string; height: number },
    height?: number,
    width?: number
}

export default function WhoIs() {
    return <Avatar
        person={{
            name: 'Linh Sofia',
            age: 25,
            imageId: 'aa707e6e-a3e2-4a5a-bc27-87153b8d6fe6',
            height: 164
        }}
        height={100}
        width={70}
    />;
};