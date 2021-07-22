import React from "react";
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
  } from "material-ui/Table";
  import Paper from "material-ui/Paper";
  import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
  
export default function UserTable() {
    const [userList, setUserList] = useState();

    useEffect(()=>{
        const getUsers = async()=>{
            const res = await Services.getUsers();
            setUserList(res);
            console.log(res)
        }
        getUsers()
    },[])
    return(
        <MuiThemeProvider>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>User Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Age</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((item, i) => {
                return (
                  <TableRow key={`row${i}`}>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.age}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </MuiThemeProvider>
    )
}