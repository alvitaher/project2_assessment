const React = require('react');

class Index extends React.Component {
    render() {
        <body>
                <h1>To Do List</h1>
        <h3>There are no todos yet!</h3> : <ul>{todosList.map((item, i) => {
            return(
                <li>{`${item.name} - ${item.isDone === false ? 'Not Done' : 'Done'}`}
                    <form action={`/todos/${item._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE"/>
                    </form>
                </li>
            )
        })}
        </ul>
        }
        </body>
    }}

    module.exports = Index;
