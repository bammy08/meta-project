import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function ReserveButton() {
    return (
        <Button 
            size="lg" 
            colorScheme="teal" 
            bg="teal.800"
        >
            <Link className="btn-reserve" to='/reserve'>Book A Table</Link>
        </Button>
    )
}

export default ReserveButton