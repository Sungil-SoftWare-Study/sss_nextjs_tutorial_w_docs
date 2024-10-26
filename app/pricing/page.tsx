export default async function Pricing() {
	return (
		<section className="flex items-center justify-center mt-10">
			<div className="flex flex-col items-center justify-center border border-white rounded-xl w-5/6">
				<p className="text-5xl mt-10">Plans</p>
				<div className="grid grid-cols-4 gap-5 m-10 w-5/6">
					<div className="flex justify-center items-center border rounded-xl">
						<p className="text-2xl">Free</p>
					</div>
					<div className="flex justify-center items-center border rounded-xl">
						<p className="text-2xl">Pro</p>
					</div>
					<div className="flex justify-center items-center border rounded-xl">
						<p className="text-2xl">Unlimited</p>
					</div>
					<div className="flex justify-center items-center border rounded-xl">
						<p className="text-2xl">Enterprice</p>
					</div>
				</div>
			</div>
		</section>
	);
}
