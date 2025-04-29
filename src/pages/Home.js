import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Home.css'

export default function Home() {

    return (
        <>
            <Box className="home-container"  sx={{ p: 6, /*ml: 30,*/ width: "50%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column ", color: "white "}}>
                <Typography variant="h3" gutterBottoms>
                    Welcome to the Product Management System
                </Typography>
                <Typography variant="h6" color="text.success" sx={{ mb: 4 , mt: 2, fontWeight: 50, fontSize: 18}}>
                    Easily add, manage, and update your products all in one place.
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="contained" component={Link} to="/add" color="success">
                        Add Product
                    </Button>
                    <Button variant="contained" component={Link} to="/list" color="success">
                        View Products
                    </Button>
                    <Button variant="contained" component={Link} to="/list" color="success">
                        Update Product
                    </Button>
                </Stack>
            </Box>
        </>
    );
}