import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Initial {
    projects: Array<any>;
    selectedProjectIndex: number | undefined;
}

const initialState: Initial = {
    projects: [],
    selectedProjectIndex: undefined
};
export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects: (state, action: PayloadAction<Array<any>>) => {
            state.projects = action.payload;
        },
        setSelectedProjectIndex: (state, action: PayloadAction<undefined | number>) => {
            state.selectedProjectIndex = action.payload;
        },
    },
});

export const { setProjects, setSelectedProjectIndex } = projectsSlice.actions;

export default projectsSlice.reducer;
