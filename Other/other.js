// JSON.stringify(obj, replacer, space)
// Parameter Values
// Parameter	Description
// obj	Required. The value to convert to a string
// replacer	Optional. Either a function or an array used to transform the result. The replacer is called for each item.
// space	Optional. Either a String or a Number.
// A string to be used as white space (max 10 characters),
// or a Number, from 0 to 10, to indicate how many space characters to use as white space.


// The Blob interface represents a blob, which is a file-like object of immutable, raw data; 
// they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.

// The Blob() constructor can create blobs from other objects. For example, to construct a blob from a JSON string:

const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

// The following code creates a JavaScript typed array and creates a new Blob containing the typed array's data.
//  It then calls URL.createObjectURL() to convert the blob into a URL.

// One way to read content from a Blob is to use a FileReader. The following code reads the content of a Blob as a typed array:

const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);

// Another way to read content from a Blob is to use a Response. The following code reads the content of a Blob as text:
const text = await new Response(blob).text();

// Or by using Blob.text():
const text2 = await blob.text();
