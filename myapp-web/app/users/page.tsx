'use client';

import { useGetUsers, usePostUsers, getGetUsersQueryKey } from '@/api/generated';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function UsersPage() {
  const queryClient = useQueryClient();
  const { data } = useGetUsers();
  const { mutateAsync: postUser, isPending } = usePostUsers();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    await postUser({ data: values });
    await queryClient.invalidateQueries({ queryKey: getGetUsersQueryKey() });
    reset();
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>

      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1 text-left">Email</th>
            <th className="border px-2 py-1 text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((u) => (
            <tr key={u.id}>
              <td className="border px-2 py-1">{u.email}</td>
              <td className="border px-2 py-1">{u.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
