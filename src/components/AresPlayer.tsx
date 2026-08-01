import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import MusicIcon from "@/assets/icons/music.png";

interface Track {
  id: string;
  title: string;
  artist: string;
  size: string;
  src: string;
}

const TRACKS: Track[] = [
  { id: "mr-bluesky", title: "Mr Bluesky", artist: "Electric Light Orchestra", size: "10.09 MB", src: "/music/mrbluesky.mp3" },
  { id: "around-world", title: "Around the World", artist: "Daft Punk", size: "9,9 MB", src: "/music/around-the-world.mp3" },
  { id: "vanilla", title: "World of Warcraft", artist: "Blizzard Entertainment", size: "2.99 MB", src: "/wow/assets/audio/Vanilla.ogg" },
  { id: "tbc", title: "The Burning Crusade", artist: "Blizzard Entertainment", size: "4.54 MB", src: "/wow/assets/audio/BurningCrusade.ogg" },
  { id: "wotlk", title: "Wrath of the Lich King", artist: "Blizzard Entertainment", size: "10.41 MB", src: "/wow/assets/audio/WrathOfTheLichKing.ogg" },
  { id: "cata", title: "Cataclysm", artist: "Blizzard Entertainment", size: "14.13 MB", src: "/wow/assets/audio/Cataclysm.ogg" },
  { id: "mop", title: "Mists of Pandaria", artist: "Blizzard Entertainment", size: "8.97 MB", src: "/wow/assets/audio/MistsOfPandaria.ogg" },
  { id: "wod", title: "Warlords of Draenor", artist: "Blizzard Entertainment", size: "14.37 MB", src: "/wow/assets/audio/WarlordsOfDraenor.ogg" },
  { id: "legion", title: "Legion", artist: "Blizzard Entertainment", size: "13.08 MB", src: "/wow/assets/audio/Legion.ogg" },
  { id: "bfa", title: "Battle for Azeroth", artist: "Blizzard Entertainment", size: "14.35 MB", src: "/wow/assets/audio/BattleForAzeroth.ogg" },
  { id: "shadowlands", title: "Shadowlands", artist: "Blizzard Entertainment", size: "28.44 MB", src: "/wow/assets/audio/Shadowlands.ogg" },
];

const formatTime = (seconds: number) => {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const AresPlayer = () => {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioGraphInitializedRef = useRef(false);
  const playRequestedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentTrack = TRACKS[currentIndex];

  const ensureAudioGraph = () => {
    if (audioGraphInitializedRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.8;
    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
    audioGraphInitializedRef.current = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataArray = new Uint8Array(64);
    let raf = 0;

    const draw = () => {
      const canvasCtx = canvas.getContext("2d");
      const analyser = analyserRef.current;
      if (canvasCtx && analyser) {
        analyser.getByteFrequencyData(dataArray);

        const dpr = window.devicePixelRatio || 1;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (canvas.width !== width * dpr) canvas.width = width * dpr;
        if (canvas.height !== height * dpr) canvas.height = height * dpr;
        canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        canvasCtx.clearRect(0, 0, width, height);

        const barCount = 48;
        const gap = 2;
        const barWidth = (width - gap * (barCount - 1)) / barCount;
        const centerY = height / 2;

        const gradient = canvasCtx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#ff8c00");
        gradient.addColorStop(1, "#3f7ee8");
        canvasCtx.fillStyle = gradient;

        for (let i = 0; i < barCount; i++) {
          const value = dataArray[Math.floor((i / barCount) * 48)];
          const barHeight = Math.max(2, (value / 255) * height * 0.92);
          const x = i * (barWidth + gap);
          canvasCtx.fillRect(x, centerY - barHeight / 2, barWidth, barHeight);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playRequestedRef.current) {
      playRequestedRef.current = false;
      ensureAudioGraph();
      audioCtxRef.current?.resume();
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setCurrentTime(0);
      setDuration(0);
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const playTrack = (index: number) => {
    playRequestedRef.current = true;
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      ensureAudioGraph();
      audioCtxRef.current?.resume();
      audio.play();
      setIsPlaying(true);
    }
  };

  const stopPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    playTrack(currentIndex === 0 ? TRACKS.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    playTrack(currentIndex === TRACKS.length - 1 ? 0 : currentIndex + 1);
  };

  const handleEnded = () => {
    playTrack(currentIndex === TRACKS.length - 1 ? 0 : currentIndex + 1);
  };

  const getStatus = (track: Track) => {
    if (track.id !== currentTrack.id) return t("ares.completed");
    return isPlaying ? t("ares.playing") : t("ares.paused");
  };

  const menuButtonStyle: React.CSSProperties = {
    background: "linear-gradient(to bottom, #1c3f8f 0%, #14337a 100%)",
    border: "1px solid #0a2454",
    borderRadius: 3,
    color: "white",
    fontSize: 11,
    padding: "2px 10px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #0a1533 0%, #0d1f47 60%, #12295c 100%)",
        fontFamily: "Tahoma, Segoe UI, sans-serif",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 10px",
          background: "linear-gradient(to bottom, #12295c 0%, #0d1f47 100%)",
          borderBottom: "1px solid #1e3a75",
        }}
      >
        <img src={MusicIcon} alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#ff8c00",
            textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
            letterSpacing: 1,
          }}
        >
          Ares
        </span>
        <span style={{ fontSize: 11, color: "#8fb0e8" }}>
          {t("ares.tagline")}
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 10,
            color: "#7fe07f",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#4fc44f",
              display: "inline-block",
            }}
          />
          {t("ares.online")}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "4px 8px",
          background: "linear-gradient(to bottom, #1c3f8f 0%, #14337a 100%)",
          borderBottom: "1px solid #0a2454",
        }}
      >
        {["file", "search", "transfer", "library", "help"].map((label) => (
          <button key={label} style={menuButtonStyle}>
            {t(`ares.${label}`)}
          </button>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          padding: "6px 8px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 6,
            alignItems: "center",
          }}
        >
          <input
            placeholder={t("ares.searchPlaceholder")}
            style={{
              flex: 1,
              height: 22,
              fontSize: 11,
              padding: "0 6px",
              background: "#e8e4dc",
              border: "1px solid #1e3a75",
              borderRadius: 2,
              outline: "none",
              color: "#111",
            }}
          />
          <button style={menuButtonStyle}>{t("ares.searchBtn")}</button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(20px, 28px) minmax(0, 1fr) minmax(52px, 90px) minmax(76px, 110px)",
            gap: 4,
            padding: "4px 6px",
            background: "#0d1f47",
            color: "#cfe0ff",
            fontSize: 10,
            fontWeight: "bold",
            borderBottom: "1px solid #1e3a75",
          }}
        >
          <span>#</span>
          <span>{t("ares.fileColumn")}</span>
          <span>{t("ares.sizeColumn")}</span>
          <span>{t("ares.statusColumn")}</span>
        </div>

        {TRACKS.map((track, index) => {
          const isCurrent = track.id === currentTrack.id;
          return (
            <div
              key={track.id}
              onClick={() => playTrack(index)}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(20px, 28px) minmax(0, 1fr) minmax(52px, 90px) minmax(76px, 110px)",
                gap: 4,
                padding: "4px 6px",
                fontSize: 11,
                cursor: "pointer",
                background: isCurrent
                  ? "linear-gradient(to bottom, #ff8c00 0%, #e07b00 100%)"
                  : "transparent",
                color: isCurrent ? "#0a1533" : "#dbe7ff",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                if (!isCurrent) e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                if (!isCurrent) e.currentTarget.style.background = "transparent";
              }}
            >
              <span>{index + 1}</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {track.title}
              </span>
              <span>{track.size}</span>
              <span style={{ fontWeight: isCurrent ? "bold" : "normal" }}>
                {getStatus(track)}
              </span>
            </div>
          );
        })}
      </div>

      <div
        style={{
          padding: "6px 10px",
          background: "linear-gradient(to bottom, #1c3f8f 0%, #14337a 100%)",
          borderTop: "1px solid #0a2454",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: "#cfe0ff",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {isPlaying ? t("ares.nowPlaying") : t("ares.stopped")} {currentTrack.title}
          </span>
        </div>
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: 70,
            display: "block",
            margin: "4px 0",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 10, color: "#cfe0ff" }}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={(e) => {
              const audio = audioRef.current;
              if (!audio) return;
              audio.currentTime = Number(e.target.value);
              setCurrentTime(Number(e.target.value));
            }}
            style={{ flex: 1, height: 4, cursor: "pointer" }}
            title={t("ares.position")}
          />
          <span style={{ fontSize: 10, color: "#cfe0ff" }}>{formatTime(duration)}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            gap: 4,
            marginTop: 4,
          }}
        >
          <button
            onClick={handlePrev}
            title={t("ares.previous")}
            style={{
              width: 26,
              height: 24,
              ...menuButtonStyle,
              padding: 0,
              fontSize: 12,
            }}
          >
            &#9198;
          </button>
          <button
            onClick={togglePlay}
            title={isPlaying ? t("ares.pause") : t("ares.play")}
            style={{
              width: 32,
              height: 24,
              ...menuButtonStyle,
              padding: 0,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {isPlaying ? "\u2759\u2759" : "\u25B6"}
          </button>
          <button
            onClick={stopPlay}
            title={t("ares.stop")}
            style={{
              width: 26,
              height: 24,
              ...menuButtonStyle,
              padding: 0,
              fontSize: 12,
            }}
          >
            &#9632;
          </button>
          <button
            onClick={handleNext}
            title={t("ares.next")}
            style={{
              width: 26,
              height: 24,
              ...menuButtonStyle,
              padding: 0,
              fontSize: 12,
            }}
          >
            &#9197;
          </button>

          <div
            style={{
              position: "absolute",
              right: 0,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 10, color: "#cfe0ff" }}>{t("ares.volume")}</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => {
                const audio = audioRef.current;
                if (!audio) return;
                audio.volume = Number(e.target.value);
                setVolume(Number(e.target.value));
              }}
              style={{ width: 70, height: 4, cursor: "pointer" }}
              title={t("ares.volumeTitle")}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0 8px",
          padding: "2px 10px",
          background: "#d4d0c8",
          borderTop: "1px solid #ffffff",
          color: "#1a1a1a",
          fontSize: 10,
          flexWrap: "wrap",
          minHeight: 20,
        }}
      >
        <span>{t("ares.connected")}</span>
        <span>{t("ares.filesInLibrary", { count: TRACKS.length })}</span>
      </div>
    </div>
  );
};

export default AresPlayer;
