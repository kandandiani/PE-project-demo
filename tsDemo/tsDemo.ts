const data = {
	a: 3,
	hello: 'world',
};

// 类型保护
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
	return o[name];
}

get(data, 'a');
