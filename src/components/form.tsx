import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import Router from "next/router";

type InputSrc = {
  name: string;
  email: string;
  free: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputSrc>();

  const onSubmit: SubmitHandler<InputSrc> = (data) => {
    console.log(data);

    fetch("/api/mail", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
      body: JSON.stringify({
        "name": data.name,
        "email": data.email,
        "free": data.free,
    }),
    })
      .then((res) => {
        // console.log("Response received", res);
        if (res.status === 200) {
          // console.log("Response succeeded!");
          Router.push("./received")
        } else {
          console.log("エラー")
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx = {{textAlign: "center"}}>
            <Grid item>
              <TextField id="name" label="お名前" {...register("name")} />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                required
                label="メールアドレス"
                error={Boolean(errors.email)}
                helperText={
                  errors.email && "正しいメールアドレスを入力してください"
                }
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
            </Grid>
            <Grid item>
              <TextField
                sx={{ minWidth: "71vw" }}
                id="free"
                multiline
                label="お問い合わせ内容"
                rows={5}
                {...register("free")}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            disableElevation
            onClick={handleSubmit(onSubmit)}
            sx = {{marginTop: "15px"}}
          >
            送信
          </Button>
        </Box>
      </div>
    </>
  );
};
