[@textileio/js-http-client](../README.md) > [Threads](../classes/threads.md)

# Class: Threads

Threads is an API module for managing Textile threads

*__param__*: Connection options object

*__param__*: 

*__extends__*: API

## Hierarchy

 `API`

**↳ Threads**

## Index

### Constructors

* [constructor](threads.md#constructor)

### Properties

* [opts](threads.md#opts)

### Methods

* [add](threads.md#add)
* [addOrUpdate](threads.md#addorupdate)
* [con](threads.md#con)
* [default](threads.md#default)
* [get](threads.md#get)
* [list](threads.md#list)
* [peers](threads.md#peers)
* [remove](threads.md#remove)
* [sendDelete](threads.md#senddelete)
* [sendGet](threads.md#sendget)
* [sendPost](threads.md#sendpost)
* [sendPostCancelable](threads.md#sendpostcancelable)
* [sendPostMultiPart](threads.md#sendpostmultipart)
* [sendPut](threads.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Threads**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Threads](threads.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Threads](threads.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(name: *`string`*, options: *`IAddThreadConfig`*): `Promise`<`any`>

Adds and joins a new thread

*__example__*: await textile.thread.add('MyMedia', { schema: mediaSchema.id, type: 'open', sharing: 'shared' })

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the new thread |
| options | `IAddThreadConfig` |

**Returns:** `Promise`<`any`>

___
<a id="addorupdate"></a>

###  addOrUpdate

▸ **addOrUpdate**(thread: *`string`*, info: *`string`*): `Promise`<`void`>

Adds or updates a thread directly, usually from a backup

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| thread | `string` |  ID of the thread |
| info | `string` |  Thread object |

**Returns:** `Promise`<`void`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="default"></a>

###  default

▸ **default**(): `Promise`<`any`>

Gets information about the default thread (if selected)

**Returns:** `Promise`<`any`>

___
<a id="get"></a>

###  get

▸ **get**(thread: *`string`*): `Promise`<`any`>

Retrieve a thread by ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| thread | `string` |  ID of the thread |

**Returns:** `Promise`<`any`>

___
<a id="list"></a>

###  list

▸ **list**(): `Promise`<`any`>

Retrieves a list of threads

**Returns:** `Promise`<`any`>

___
<a id="peers"></a>

###  peers

▸ **peers**(thread: *`string`*): `Promise`<`any`>

List all peers in a thread

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| thread | `string` |  ID of the thread. Omit for default. |

**Returns:** `Promise`<`any`>

___
<a id="remove"></a>

###  remove

▸ **remove**(thread: *`string`*): `Promise`<`void`>

Remove a thread by ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| thread | `string` |  ID of the thread |

**Returns:** `Promise`<`void`>

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

