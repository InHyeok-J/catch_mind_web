import RoomComponent from './RoomComponent';
import React from 'react';
import styled from 'styled-components';

const RoomList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 1vw);
    height: calc(95vh - 40px - 1vh);
    padding: 0.5vh 0.5vw;
    background-color: rgba(255, 255, 255, 0.3);
`;

const displayRoomList = (props) => {
    console.log(props);
    return (
        <RoomList>
            {props.map((props) => (
                <RoomComponent
                    key={props.id}
                    isOpen={true}
                    roomNumber={props.id}
                    title={props.title}
                />
            ))}
        </RoomList>
    );
};

export default displayRoomList;
