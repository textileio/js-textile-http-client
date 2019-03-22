[@textileio/js-http-client](../README.md) > [Contacts](../classes/contacts.md)

# Class: Contacts

Contacts is an API module for managing local contacts and finding contacts on the network

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Contacts**

## Index

### Constructors

* [constructor](contacts.md#constructor)

### Properties

* [opts](contacts.md#opts)

### Methods

* [add](contacts.md#add)
* [con](contacts.md#con)
* [get](contacts.md#get)
* [list](contacts.md#list)
* [remove](contacts.md#remove)
* [search](contacts.md#search)
* [sendDelete](contacts.md#senddelete)
* [sendGet](contacts.md#sendget)
* [sendPost](contacts.md#sendpost)
* [sendPostCancelable](contacts.md#sendpostcancelable)
* [sendPostMultiPart](contacts.md#sendpostmultipart)
* [sendPut](contacts.md#sendput)
* [threads](contacts.md#threads)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Contacts**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Contacts](contacts.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Contacts](contacts.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(info: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Adds or updates a contact directly, usually from a search

**Parameters:**

| Name | Type |
| ------ | ------ |
| info | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>
address

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="get"></a>

###  get

▸ **get**(contact: *`string`*): `Promise`<`any`>

Retrieve information about a known contact

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| contact | `string` |  ID of the contact |

**Returns:** `Promise`<`any`>

___
<a id="list"></a>

###  list

▸ **list**(threadId: *`string`*): `Promise`<`any`>

Retrieves a list of known contacts

**Parameters:**

| Name | Type |
| ------ | ------ |
| threadId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="remove"></a>

###  remove

▸ **remove**(contactId: *`string`*): `Promise`<`void`>

Remove a known contact

**Parameters:**

| Name | Type |
| ------ | ------ |
| contactId | `string` |

**Returns:** `Promise`<`void`>

___
<a id="search"></a>

###  search

▸ **search**(options: *`IContactQuery`*): [RunningEvent](../interfaces/runningevent.md)

Searches locally and on the network for contacts by username, peer id, or address

*__example__*: const backups = textile.account.search({wait: 5}) setTimeout(() => backups.cancel(), 1000) // cancel after 1 second backups.on('textile.contacts.found', found => { console.log(found) }) backups.on('\*.done', cancelled => { console.log(`search was ${cancelled ? 'cancelled' : 'completed'}`) })

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IContactQuery` |

**Returns:** [RunningEvent](../interfaces/runningevent.md)
Event emitter with found, done, error events on textile.contacts.
The Event emitter has an additional cancel method that can be used to cancel the search.

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
<a id="threads"></a>

###  threads

▸ **threads**(contact: *`string`*): `Promise`<`void`>

Retrieve all threads shared with the given contact

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| contact | `string` |  ID of the contact |

**Returns:** `Promise`<`void`>

___

