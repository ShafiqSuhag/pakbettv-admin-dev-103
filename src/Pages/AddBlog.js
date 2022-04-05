import { Box, Button, FormControl, Grid, OutlinedInput } from '@mui/material';
import React, { Component } from 'react';
import '../Styles/Pages/AddBlog.css';
import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import AddBlogSidebar from '../Components/Pages/AddBlogSidebar';
class EditorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange: Function = (editorState) => {
        // console.log(editorState)
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return <div className='editor'>
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                }}
            />
        </div>
    }
}

const AddBlog = () => {
    return (
        <div className='add-blog-page'>
            <Box>
                <Grid container>
                    {/* write blog */}
                    <Grid item lg={9} md={9}>
                        <div className="write-blog-container">
                            <div className="write-blog-top">
                                <div className="post-options">
                                    <h4>Edit Post</h4>
                                    <Button variant="outlined">Add New</Button>
                                </div>
                                <div className="post-title">
                                    <FormControl size='small' className='post-title-input-container' variant="outlined">
                                        <OutlinedInput
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="write-post-editor">
                                <EditorContainer />
                            </div>
                            <div className="post-seo-info">
                                <div className="post-seo-info-container">
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <h3>Seo Title</h3>
                                    <FormControl size='small' style={{width: '100%'}} variant="outlined">
                                        <OutlinedInput
                                        style={{width: '100%'}}
                                        />
                                    </FormControl>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <h3>Seo Description</h3>
                                    <FormControl size='small' style={{width: '100%'}} variant="outlined">
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </FormControl>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <h3>Seo Tags</h3>
                                    <FormControl size='small' style={{width: '100%'}} variant="outlined">
                                        <OutlinedInput
                                        style={{width: '100%'}}
                                        />
                                    </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* add blog sidebar */}
                    <Grid lg={3} md={3}>
                        <AddBlogSidebar />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AddBlog;