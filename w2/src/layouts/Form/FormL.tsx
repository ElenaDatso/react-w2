import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface BookFormData {
  title: string;
  author: string;
  dateArrived: Date;
  type: string[];
  isUsed: boolean;
  reading: string;
  cover: FileList;
}

type Props = {
  onNewData: (data: BookFormData) => void;
};

const BookForm = (props: Props) => {
  const { register, handleSubmit, control } = useForm<BookFormData>();

  const onSubmit = (data: BookFormData) => {
    console.log(data);
    props.onNewData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register('title', { required: true })} />
      </div>

      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" {...register('author', { required: true })} />
      </div>

      <div>
        <label htmlFor="dateArrived">Date Arrived:</label>
        <input type="date" id="dateArrived" {...register('dateArrived', { required: true })} />
      </div>

      <div>
        <label htmlFor="type">Type:</label>
        <label>
          <input type="checkbox" value="fantasy" {...register('type')} />
          Fantasy
        </label>
        <label>
          <input type="checkbox" value="comedy" {...register('type')} />
          Comedy
        </label>
        <label>
          <input type="checkbox" value="family" {...register('type')} />
          Family
        </label>
        <label>
          <input type="checkbox" value="lovestory" {...register('type')} />
          Love Story
        </label>
      </div>

      <div>
        <label htmlFor="isUsed">Is Used:</label>
        <label>
          <input type="radio" value="true" {...register('isUsed')} />
          Yes
        </label>
        <label>
          <input type="radio" value="false" {...register('isUsed')} />
          No
        </label>
      </div>

      <div>
        <label htmlFor="reading">Reading:</label>
        <Controller
          name="reading"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field}>
              <option value="">Select a reader</option>
              <option value="Smith">Smith</option>
              <option value="Johnson">Johnson</option>
              <option value="Williams">Williams</option>
              <option value="Jones">Jones</option>
              <option value="Brown">Brown</option>
            </select>
          )}
        />
      </div>

      <div>
        <label htmlFor="cover">Cover:</label>
        <input type="file" id="cover" {...register('cover', { required: true })} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
