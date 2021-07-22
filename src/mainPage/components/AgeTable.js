import React from "react";
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
  } from "material-ui/Table";
  import Paper from "material-ui/Paper";
  import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
  
export default function AgeTable() {
    const [selectedItem, setSelectedItem] = useState("___");
    const [ageList, setAgeList] = useState()
    const [dropDownOpen, setDropDownOpen] = useState(false)
    useEffect(()=>{
        const getAgeList = async()=>{
            const res = await Services.getListOfAgesOfUsersWith();
            setAgeList(res);
        }
        getAgeList()
    },[])
    const dropDownHandler = ()=>{
        setDropDownOpen(!dropDownOpen)
    }
    return(
        <MuiThemeProvider>
        <Paper>
            <Button variant="contained" onClick={dropDownHandler}>Item</Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Age</strong>
                </TableCell>
                <TableCell>
                  <strong>Count</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ageList.map((item, i) => {
                return (
                  <TableRow key={`row${i}`}>
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