import Lottie from "react-lottie"

import loadingAnimation from "../assets/loadAnimation.json"

export default function Loading(): JSX.Element {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	}

	return (
		<div
			style={{
				backgroundColor: "#38c172",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<div style={{ width: "25vw", height: "25vw" }}>
				<Lottie options={defaultOptions} />
			</div>
		</div>
	)
}
