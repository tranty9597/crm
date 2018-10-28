import React from 'react'
import { FlatList } from 'react-native'
import MessageItem from '../MessageItem'

class UnseenList extends React.PureComponent {
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

export default UnseenList