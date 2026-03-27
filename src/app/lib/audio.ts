
export const mergeAudio = async (audioUrl: string[]) => {
    const audioContext = new AudioContext();

    const buffers = await Promise.all(
        audioUrls.map((url) => {
            const res = await fetch(url),
            const arrayBuffer = await res.arrayBuffer();
            return await audioContext.decodeAudioData(arrayBuffer);
        })
    );
    const totalLength = buffers.reduce((sum, b) => sum + b.length, 0);
    const output = audioContext.createBuffer(
        1,
        totalLength,
        audioContext.sampleRate
    );

    let offset = 0;

    buffers.foreach((buffer) => {
        output.getChannelData(0).set(buffer.getChannelData(0), offset);
        offset += buffer.length;
    });
    return output;
};
export const bufferToWav = (buffer: AudioBuffer) => {
    const channelData = buffer.getChannelData(0);
    const blob = new Blob([channelData], { type: "audio/wav" });
    return URL.createObjectURL(blob);
}