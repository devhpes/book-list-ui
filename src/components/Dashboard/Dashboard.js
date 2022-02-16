import { useState } from "react";
import "./dashboard.css";
import "../UI/ui.css";
import "./modal.css";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Typography,
} from "@mui/material";
import Modal from "react-modal";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Dashboard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} textAlign="left">
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <CardContent>
              <div>
                <h1 className="dashboard-heading">Books List</h1>
                <hr></hr>
              </div>
            </CardContent>
            <Card className="card-customize" sx={{ minWidth: 350 }}>
              <CardContent>
                <div>
                  <h3>
                    Title :{" "}
                    <span className="title-color">
                      Deep Work by Cal Newport
                    </span>
                  </h3>
                  <Button
                    id="button-customize"
                    variant="outlined"
                    color="secondary"
                    onClick={openModal}
                  >
                    View Details
                  </Button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                  >
                    <CardContent>
                      <Typography>
                        <div>
                          <h3>
                            Title :{" "}
                            <span className="title-color">
                              Deep Work by Cal Newport
                            </span>
                          </h3>
                        </div>
                        <div>
                          <h3>
                            Description :{"\u00A0"}
                            <span className="desciption-customize">
                              Deep work is the ability to focus without
                              distraction on a cognitively demanding task. It's
                              a skill that allows you to quickly master
                              complicated information and produce better results
                              in less time. Deep work will make you better at
                              what you do and provide the sense of true
                              fulfillment that comes from craftsmanship. In
                              short, deep work is like a super power in our
                              increasingly competitive twenty-first century
                              economy. And yet, most people have lost the
                              ability to go deep-spending their days instead in
                              a frantic blur of e-mail and social media, not
                              even realizing there's a better way. short, deep
                              work is like a super power in our increasingly
                              competitive twenty-first century economy. And yet,
                              most people have lost the ability to go
                              deep-spending their days instead in a frantic blur
                              of e-mail and social media, not even realizing
                              there's a better way.
                            </span>
                          </h3>
                        </div>
                        <div>
                          <h3>
                            Likes :{" "}
                            <span className="likes-customize"> 78 </span>
                          </h3>
                        </div>
                        <div>
                          <h3>
                            Published Date :{" "}
                            <span className="published-date-customize">
                              12th December 2012
                            </span>
                          </h3>
                        </div>
                      </Typography>
                    </CardContent>
                  </Modal>
                  {"\u00A0"}
                  <Button variant="outlined">
                    <ThumbUpRoundedIcon />
                    {"\u00A0"}
                    <span className="like-icon-customize">50</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
