"use client";
import FormDialog from "@/components/general/FormDialog";
import Header from "@/components/home/Header";
import { Button, Container } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Container sx={{ flexGrow: 1, py: 2 }}>
        <div className="flex">
          <div className="w-7/12">
            <FormDialog
              openButtonText="Add new link"
              title="Add new link"
              contentText="Generate a new link"
              inputs={[
                {
                  autoFocus: true,
                  margin: "dense",
                  id: "linkName",
                  label: "Link name",
                  type: "text",
                  variant: "standard",
                },
                // ... add more input fields as needed
              ]}
              handleSubmit={() => {
                // Handle form submission logic here
              }}
            />

            <div className=""></div>
          </div>
          <div className="w-5/12">Dashboard</div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
