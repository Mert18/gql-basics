import { v4 as uuidv4 } from "uuid";

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => {
      return user.email === args.data.email;
    });
    if (emailTaken) {
      throw new Error("Email is taken.");
    }

    const user = {
      id: uuidv4(),
      ...args.data,
    };
    db.users.push(user);
    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => {
      return user.id === args.id;
    });

    if (!userIndex) {
      throw new Error("User not exists.");
    }
    const deletedUsers = db.users.splice(userIndex, 1);

    db.posts = db.posts.filter((post) => {
      const match = post.author === args.id;
      if (match) {
        db.comments = db.comments.filter((comment) => {
          return comment.post !== post.id;
        });
      }
      return !match;
    });
    db.comments = db.comments.filter((comment) => comment.author !== args.id);

    return deletedUsers[0];
  },
  createPost(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (userExists === -1) {
      throw new Error("User not exists");
    }

    const post = {
      id: uuidv4(),
      ...args.data,
    };

    db.posts.push(post);
    return post;
  },
  deletePost(parent, args, { db }, info) {
    const postIndex = db.posts.findIndex((post) => {
      return post.id === args.id;
    });

    if (postIndex === -1) {
      throw new Error("Post not found");
    }

    const deletedPosts = db.posts.splice(postIndex, 1);

    db.comments = db.comments.filter((comment) => comment.post !== args.id);

    return deletedPosts[0];
  },
  createComment(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    const postExists = db.posts.some(
      (post) => post.id === args.data.post && post.published
    );

    if (!userExists || !postExists) {
      throw new Error("User or Post does not exist");
    }

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    db.comments.push(comment);
    return comment;
  },
  deleteComment(parent, args, { db }, info) {
    const commentIndex = db.comments.findIndex(
      (comment) => comment.it === args.id
    );

    if (commentIndex === -1) {
      throw new Error("Comment not found!");
    }
    const deletedComments = db.comments.splice(commentIndex, 1);

    return deletedComments[0];
  },
};

export { Mutation as default };
