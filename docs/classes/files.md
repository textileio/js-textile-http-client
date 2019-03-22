[@textileio/js-http-client](../README.md) > [Files](../classes/files.md)

# Class: Files

Files is an API module for managing Textile files

*__param__*: options object

*__extends__*: {API}

## Hierarchy

 `API`

**↳ Files**

## Index

### Constructors

* [constructor](files.md#constructor)

### Properties

* [mills](files.md#mills)
* [opts](files.md#opts)
* [threads](files.md#threads)

### Methods

* [addFile](files.md#addfile)
* [con](files.md#con)
* [get](files.md#get)
* [ignore](files.md#ignore)
* [keys](files.md#keys)
* [list](files.md#list)
* [sendDelete](files.md#senddelete)
* [sendGet](files.md#sendget)
* [sendPost](files.md#sendpost)
* [sendPostCancelable](files.md#sendpostcancelable)
* [sendPostMultiPart](files.md#sendpostmultipart)
* [sendPut](files.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Files**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Files](files.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Files](files.md)

___

## Properties

<a id="mills"></a>

###  mills

**● mills**: *[Mills](mills.md)*

___
<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___
<a id="threads"></a>

###  threads

**● threads**: *[Threads](threads.md)*

___

## Methods

<a id="addfile"></a>

###  addFile

▸ **addFile**(threadId: *`string`*, file: *`IFile`*, caption: *`string`*): `Promise`<`void`>

Add a file to a thread in your Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| threadId | `string` |
| file | `IFile` |  A FormData object or a function for creating a FormData object |
| caption | `string` |  Caption to add |

**Returns:** `Promise`<`void`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="get"></a>

###  get

▸ **get**(id: *`string`*): `Promise`<`any`>

Retrieves a thread file by block ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target file |

**Returns:** `Promise`<`any`>

___
<a id="ignore"></a>

###  ignore

▸ **ignore**(id: *`string`*): `Promise`<`void`>

Ignores a thread file by its block ID

This adds an 'ignore' thread block targeted at the file. Ignored blocks are by default not returned when listing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the thread file |

**Returns:** `Promise`<`void`>

___
<a id="keys"></a>

###  keys

▸ **keys**(target: *`string`*): `Promise`<`any`>

Retrieves file encryption/decryption keys under the given target

Note that the target id is _not_ the same as the block id. The target is the actual target file object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `string` |  ID of the target file |

**Returns:** `Promise`<`any`>

___
<a id="list"></a>

###  list

▸ **list**(options: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Get a paginated array of files.

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="senddelete"></a>

###  sendDelete

▸ **sendDelete**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a delete request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendget"></a>

###  sendGet

▸ **sendGet**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a get request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendpost"></a>

###  sendPost

▸ **sendPost**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a post request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendpostcancelable"></a>

###  sendPostCancelable

▸ **sendPostCancelable**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `object`

Make a post request to the Textile node that is cancelable

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `object`
request

___
<a id="sendpostmultipart"></a>

###  sendPostMultiPart

▸ **sendPostMultiPart**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a post request to the Textile node using a multi-part form

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendput"></a>

###  sendPut

▸ **sendPut**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a put request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to put |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___

