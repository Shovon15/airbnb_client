import "./cardSkeleton.css";

const CardSkeleton = () => {
	return (
		<div className="flex gap-5 px-10 min-h-screen">
			<div className="bg-white shadow-lg rounded-lg p-6 w-60 h-80">
				<div className="animate-pulse">
					<div className="bg-gray-300 h-40 rounded-lg animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="h-4 bg-gray-300 rounded animate-skeleton"></div>
					<div className="h-6 mt-2 bg-gray-300 rounded animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="flex items-center justify-center bg-gray-300 rounded-lg h-10 w-24 animate-skeleton"></div>
				</div>
			</div>
			<div className="bg-white shadow-lg rounded-lg p-6 w-60 h-80">
				<div className="animate-pulse">
					<div className="bg-gray-300 h-40 rounded-lg animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="h-4 bg-gray-300 rounded animate-skeleton"></div>
					<div className="h-6 mt-2 bg-gray-300 rounded animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="flex items-center justify-center bg-gray-300 rounded-lg h-10 w-24 animate-skeleton"></div>
				</div>
			</div>
			<div className="bg-white shadow-lg rounded-lg p-6 w-60 h-80">
				<div className="animate-pulse">
					<div className="bg-gray-300 h-40 rounded-lg animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="h-4 bg-gray-300 rounded animate-skeleton"></div>
					<div className="h-6 mt-2 bg-gray-300 rounded animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="flex items-center justify-center bg-gray-300 rounded-lg h-10 w-24 animate-skeleton"></div>
				</div>
			</div>
			<div className="bg-white shadow-lg rounded-lg p-6 w-60 h-80">
				<div className="animate-pulse">
					<div className="bg-gray-300 h-40 rounded-lg animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="h-4 bg-gray-300 rounded animate-skeleton"></div>
					<div className="h-6 mt-2 bg-gray-300 rounded animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="flex items-center justify-center bg-gray-300 rounded-lg h-10 w-24 animate-skeleton"></div>
				</div>
			</div>
			<div className="bg-white shadow-lg rounded-lg p-6 w-60 h-80">
				<div className="animate-pulse">
					<div className="bg-gray-300 h-40 rounded-lg animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="h-4 bg-gray-300 rounded animate-skeleton"></div>
					<div className="h-6 mt-2 bg-gray-300 rounded animate-skeleton"></div>
				</div>
				<div className="mt-4 animate-pulse">
					<div className="flex items-center justify-center bg-gray-300 rounded-lg h-10 w-24 animate-skeleton"></div>
				</div>
			</div>
		</div>
	);
};

export default CardSkeleton;
