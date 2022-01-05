import React, {useState} from "react";
import {Grid,TextField,Button} from "@material-ui/core"

export default function UserRegistration () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [contact, setContact] = useState('')

    const validateEmail = (email) => {
         console.log(email);
    }

    return(
        <div>
            <Grid container direction = "column">
                <Grid item>
                <TextField required id="outlined-basic" label="Name" variant="outlined" type="email" />
                </Grid>
                <Grid item>
                <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(e) => validateEmail(e.target.value)} />
                </Grid>
                <Grid item>
                <TextField required id="outlined-basic" label="Password" variant="outlined" />
                </Grid>
                <Grid item>
                <TextField required id="outlined-basic" label="Contact" variant="outlined" />
                </Grid>
                <Grid item container direction="row">
                    <Grid item>
                        <Button> Reset </Button>
                    </Grid>
                    <Grid item>
                        <Button> Register </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}