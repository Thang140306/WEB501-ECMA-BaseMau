import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

function AddPage() {
  const [name, setName] = useState('')
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [available, setAvailable] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:3000/tours', {
        name,
        destination,
        duration,
        price: Number(price),
        image,
        description,
        available: Number(available)
      })

      toast.success('Thêm tour thành công!')

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm tour mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Destination</label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Duration</label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Available</label>
          <input
            type="number"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default AddPage
