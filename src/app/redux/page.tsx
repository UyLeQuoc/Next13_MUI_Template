"use client";

import { decrement, increment, reset } from "@/common/redux/features/counter";
import { useAppDispatch, useAppSelector } from "@/common/redux/hooks";
import { useGetUsersQuery } from "@/common/redux/services/userApi";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

type Props = {}

const ReduxPage = (props: Props) => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null)

  return (
    <div>
       <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h4 style={{ marginBottom: 16 }}>{count}</h4>
          <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
          <Button style={{ marginInline: 16 }} variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button style={{ marginInline: 16 }} variant="outlined" onClick={() => dispatch(reset())}>Reset</Button>
        </div>

        {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.map((user) => (
              <Grid key={user.id} item xs={6} sm={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Test Paragraph
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      ) : null}

    </div>
  )
}

export default ReduxPage