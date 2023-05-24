

const login = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-white">
	<div class="bg-green-400 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
		<div class="text-white pb-4 text-3xl font-semibold">Acme Corporation</div>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			id="username"
			type="text"
			placeholder="your username"
		/>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			id="password"
			type="password"
			placeholder="password"
		/>
		<button
			class="inline-block mt-2 bg-green-600 hover:bg-green-700 focus:bg-green-800 px-6 py-2 rounded text-white shadow-lg"
		>
			Login
		</button>
		<div class="pt-10 flex items-center justify-between">
			<a
				href="#1"
				class="inline-block text-green-700 hover:text-green-900 align-baseline font-normal text-sm"
			>
				Forgot password?
			</a>
			<a href="#2" class="inline-block text-green-700 hover:text-green-900 font-normal text-sm">
				Create an Account
			</a>
		</div>
	</div>
	<p class="mt-4 text-center text-gray-400 text-xs">
		&copy;2022 Acme Corporation. All rights reserved.
	</p>
</div>

  )
}
 export default login;
