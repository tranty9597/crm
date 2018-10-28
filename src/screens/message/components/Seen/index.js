import React from 'react'
import { FlatList } from 'react-native'
import MessageItem from '../MessageItem';

class SeenList extends React.PureComponent {
    render() {
        return (
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    return (
                        <MessageItem />
                    )
                }}
            />
        )
    }
}
export default SeenList