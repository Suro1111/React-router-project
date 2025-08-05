import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import {
  AlbumInfo,
  Albums,
  ComentInfo,
  Comments,
  Header,
  Notefound,
  PhotoInfo,
  Photos,
  PostInfo,
  Posts,
  Todos,
  UserInfo,
  Users,
} from "./pages/index.js";

export function App({ myData, albums, comments, photos, posts, todos, users }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout myData={myData} />}>
          <Route index element={<Header />} />
          <Route path="albums" element={<Albums albums={albums} />} />
          <Route path="comments" element={<Comments comments={comments} />} />
          <Route path="photos" element={<Photos photos={photos} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="todos" element={<Todos todos={todos} />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="albums/:id" element={<AlbumInfo albums={albums} />} />
          <Route
            path="comments/:id"
            element={<ComentInfo comments={comments} />}
          />
          <Route path="photos/:id" element={<PhotoInfo photos={photos} />} />
          <Route path="posts/:id" element={<PostInfo posts={posts} />} />
          <Route path="users/:id" element={<UserInfo users={users} />} />
          <Route path="*" element={<Notefound />} />
        </Route>
      </Routes>
    </>
  );
}
