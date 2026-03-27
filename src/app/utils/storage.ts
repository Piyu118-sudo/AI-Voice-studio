import { useProjectStore } from "@/store/useProjectStore";

export const saveProject = () => {
    const data = useProjectStore.getState();
    localStorage.setItem("ai-voice-studio", JSON.stringify(data));
    alert("Project saved!");
};

export const loadProject = () => {
    const data = localStorage.getItem("ai-voice-studio");

    if (!data) {
        alert("No saved Projects");
        return;
    }

    const parsed = JSON.parse(data);

    useProjectStore.setState({
        script: parsed.script,
        chunks: parsed.chunks, 
    });
};