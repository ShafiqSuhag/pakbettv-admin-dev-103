import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Paper, Select } from '@mui/material';
import React, { useState } from 'react';
import '../../Styles/Components/AddBlogSidebar.css';

const AddBlogSidebar = () => {
    // categories
    const [categories, setCategories] = useState([]);
    const handleAddCategory = () => {
        const allCategories = [...categories];
        const input = document.getElementById('category-input');
        const value = input.value;
        
        if(value.length>=1){
            allCategories.push(value);
        }
        setCategories(allCategories);
        input.value='';
    }

    // tags
    const [tags, setTags] = useState([]);
    const handleAddTags = () => {
        const allTags = [...tags];
        const input = document.getElementById('tag-input');
        const value = input.value;
        
        if(value.length>=1){
            allTags.push(value);
        }
        setTags(allTags);
        input.value='';
    }

    return (
        <div className='add-blog-sidebar'>
            <div className="publish-options">
                <div className='sidebar-paper'>
                    <h4 className='sidebar-subHeadings'>Publish</h4>
                    <div className="sidebar-paper-content">

                        <div className="content-item">
                            <p>Status: </p>
                            <div>
                                <FormControl size='small' fullWidth>
                                    <InputLabel id="demo-simple-select-label">Published</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                    >
                                        <MenuItem>published</MenuItem>
                                        <MenuItem>draft</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="content-item">
                            <p className='publish-date'>Published On: Apr 4, 2022 </p>
                        </div>
                        <div style={{
                            justifyContent: 'space-between'
                        }} className="content-item">
                            <p style={{ textDecoration: 'underline', color: '#b32d2e' }} className='publish-date'> Move to trash </p>
                            <Button style={{
                                fontSize: '13px',
                                textTransform: 'none'
                            }} variant="contained">Update</Button>
                        </div>
                    </div>
                </div>
                <div className='sidebar-paper'>
                    <h4 className='sidebar-subHeadings'>Categories</h4>
                    <div className="sidebar-paper-content">
                        <div style={{marginBottom: '10px'}} className="category-list">
                            {
                                categories.map((item,index)=> <FormControlLabel control={<Checkbox />} label={item} />)
                            }
                        </div>
                        <div className="add-category">
                            <FormControl style={{width: '100%'}} size='small' variant="outlined">
                                <OutlinedInput
                                id="category-input"
                                />
                            </FormControl>
                            <Button onClick={handleAddCategory} sx={{textDecoration: 'underline', textTransform: 'none', fontSize: '13px'}} variant="text">+ Add Category</Button>
                        </div>

                    </div>
                </div>
                <div className='sidebar-paper'>
                    <h4 className='sidebar-subHeadings'>Tags</h4>
                    <div className="sidebar-paper-content">
                        <div className="add-category">
                            <FormControl style={{width: '100%'}} size='small' variant="outlined">
                                <OutlinedInput
                                id="tag-input"
                                />
                            </FormControl>
                            <Button onClick={handleAddTags} sx={{textDecoration: 'underline', textTransform: 'none', fontSize: '13px'}} variant="text">+ Add tag</Button>
                        </div>
                        <div className="category-list">
                            {
                                tags.map((item,index)=> <FormControlLabel control={<Checkbox />} label={item} />)
                            }
                        </div>

                    </div>
                </div>
                <div className='sidebar-paper'>
                    <h4 className='sidebar-subHeadings'>Featured Image</h4>
                    <div className="sidebar-paper-content">
                            <img src="/placeholder-img.png" alt="" />
                            <Button onClick={handleAddTags} sx={{textDecoration: 'underline', textTransform: 'none', fontSize: '13px'}} variant="text">Remove featured image</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlogSidebar;