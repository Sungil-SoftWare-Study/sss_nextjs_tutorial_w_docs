import Link from "next/link";

export default async function Nav() {
	return (
		<div className="sticky top-0 grid grid-cols-2 items-center h-20">
			<h1 className="float-left text-xl ml-10">
				<Link href={"/"}>My Website</Link>
			</h1>
			<ul className="flex justify-end gap-10 mr-10">
				<li>
					<Link href={"/pricing"}>pricing</Link>
				</li>
				<li>terms&prolicy</li>
				<li>about us</li>
			</ul>
		</div>
	);
}
