import * as React from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import CreatePost from './CreatePost';
const CreatePostPopup =() => {
    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                    <Button variant="contained" {...bindToggle(popupState)}>
                        Create Post
                    </Button>
                    <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    {/* Create Post */}
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}
export default CreatePostPopup;