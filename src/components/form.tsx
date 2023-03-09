import React from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";

type InputSrc = {
  name: string;
  email: string;
  free: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputSrc>();
  const onSubmit: SubmitHandler<InputSrc> = (data) => {
    console.log(data);
    console.log(watch("email"));
  };

  return (
    <>
      <div>
        <Box>
          <Typography>ここにフォーム</Typography>
          <TextField id="name" label="お名前" {...register("name")} />
          <TextField
            id="email"
            required
            label="メールアドレス"
            error={Boolean(errors.email)}
            helperText={errors.email && "正しいメールアドレスを入力してください"}
            {...register("email", {required:true, pattern: /\S+@\S+\.\S+/})}
          />
          <TextField
            id="free"
            multiline
            fullWidth
            label="お問い合わせ内容（入室希望もこちらに）"
            rows={5}
            {...register("free")}
          />
          <Button
            variant="contained"
            disableElevation
            onClick={handleSubmit(onSubmit)}
          >
            送信
          </Button>
        </Box>
      </div>
    </>
  );
};
